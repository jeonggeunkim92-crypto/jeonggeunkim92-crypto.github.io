import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Phone, Building2, Smartphone } from "lucide-react";
import { ReactNode } from "react";

interface PhoneCallDialogProps {
  children: ReactNode;
}

const PhoneCallDialog = ({ children }: PhoneCallDialogProps) => {
  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">전화 연결</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <button
            onClick={() => handleCall("031-262-4959")}
            className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors border border-border"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">대표 전화</p>
              <p className="text-lg font-bold text-foreground">031-262-4959</p>
            </div>
            <Phone className="w-5 h-5 text-primary ml-auto" />
          </button>

          <button
            onClick={() => handleCall("010-4684-3412")}
            className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors border border-border"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">휴대전화</p>
              <p className="text-lg font-bold text-foreground">010-4684-3412</p>
            </div>
            <Phone className="w-5 h-5 text-primary ml-auto" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhoneCallDialog;
