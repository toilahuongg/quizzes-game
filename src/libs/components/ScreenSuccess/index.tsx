import { useEffect } from "react";

export interface ScreenSuccessProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ScreenSuccess: React.FC<ScreenSuccessProps> = ({ open, setOpen }) => {

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 1000)
    }
  }, [open, setOpen])

  return (
    <div className="fixed top-0 left-0 w-full h-lvh bg-green-700 flex items-center justify-center transition-all -z-10 opacity-0 data-[open=true]:z-50 data-[open=true]:opacity-100" data-open={open}>
      <p className="text-5xl font-semibold text-white text-center">Quá tuyệt vời! Bạn đã trả lời đúng 😍</p>
    </div>
  )
}