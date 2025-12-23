-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  author_name TEXT NOT NULL DEFAULT '관리자',
  category TEXT NOT NULL DEFAULT '부동산 정보',
  is_published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published posts
CREATE POLICY "Anyone can view published posts"
ON public.blog_posts
FOR SELECT
USING (is_published = true);

-- Policy: Authenticated users can manage posts
CREATE POLICY "Authenticated users can create posts"
ON public.blog_posts
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update posts"
ON public.blog_posts
FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete posts"
ON public.blog_posts
FOR DELETE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can view all posts"
ON public.blog_posts
FOR SELECT
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to generate slug from title
CREATE OR REPLACE FUNCTION public.generate_slug(title TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN lower(regexp_replace(title, '[^a-zA-Z0-9가-힣]+', '-', 'g'));
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, content, excerpt, category, is_published, published_at) VALUES
('2024년 부동산 시장 전망', '2024-real-estate-outlook', 
'## 2024년 부동산 시장 분석

올해 부동산 시장은 금리 인하 기대감과 함께 서서히 회복세를 보이고 있습니다. 특히 수도권 핵심 지역의 아파트 거래량이 증가하고 있으며, 전세 시장도 안정화되는 추세입니다.

### 주요 포인트
1. 금리 동향에 따른 매수 심리 변화
2. 신축 아파트 분양 시장 활성화
3. 재건축/재개발 기대감 상승

앞으로의 시장 변화를 주시하며 현명한 투자 결정을 내리시기 바랍니다.', 
'올해 부동산 시장은 금리 인하 기대감과 함께 서서히 회복세를 보이고 있습니다.',
'시장 분석', true, now()),

('아파트 매매 시 꼭 확인해야 할 체크리스트', 'apartment-buying-checklist',
'## 아파트 매매 체크리스트

아파트를 구매하기 전에 반드시 확인해야 할 사항들을 정리했습니다.

### 법적 검토 사항
- 등기부등본 확인
- 건축물대장 검토
- 토지이용계획 확인

### 현장 확인 사항
- 일조권 및 조망권
- 주차 시설 현황
- 관리비 내역

### 재정 계획
- 대출 가능 금액 확인
- 취득세 등 부대비용 계산
- 이사 비용 예산',
'아파트를 구매하기 전에 반드시 확인해야 할 사항들을 정리했습니다.',
'매매 가이드', true, now()),

('전세 vs 월세, 어떤 것이 유리할까?', 'jeonse-vs-monthly-rent',
'## 전세와 월세 비교 분석

주거 형태를 결정할 때 가장 많이 고민하는 부분이 전세와 월세의 선택입니다.

### 전세의 장점
- 월 고정 지출 없음
- 목돈 마련 가능
- 안정적인 거주

### 월세의 장점
- 초기 자금 부담 적음
- 유동성 확보
- 투자 기회 활용 가능

각자의 재정 상황과 라이프스타일에 맞는 선택을 하시기 바랍니다.',
'주거 형태를 결정할 때 가장 많이 고민하는 부분이 전세와 월세의 선택입니다.',
'임대 가이드', true, now());