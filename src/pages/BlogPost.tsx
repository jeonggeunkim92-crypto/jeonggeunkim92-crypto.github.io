import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface BlogPostData {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  category: string;
  author_name: string;
  published_at: string | null;
  created_at: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);

  // 페이지 진입 시 상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .maybeSingle();

      if (!error && data) {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-semibold text-foreground mt-8 mb-4">
            {line.replace("### ", "")}
          </h3>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold text-foreground mt-10 mb-4">
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="text-muted-foreground ml-4 mb-2">
            {line.replace("- ", "")}
          </li>
        );
      }
      if (line.match(/^\d+\. /)) {
        return (
          <li key={index} className="text-muted-foreground ml-4 mb-2 list-decimal">
            {line.replace(/^\d+\. /, "")}
          </li>
        );
      }
      if (line.trim() === "") {
        return <br key={index} />;
      }
      return (
        <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/4 mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              게시글을 찾을 수 없습니다
            </h1>
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                블로그로 돌아가기
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-6 max-w-3xl">
          <Link to="/blog">
            <Button variant="ghost" size="sm" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              블로그로 돌아가기
            </Button>
          </Link>

          <header className="mb-10">
            <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author_name}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.published_at || post.created_at)}
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
