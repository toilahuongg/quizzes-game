export interface FrameProps {
  background: string;
  children: React.ReactNode
}
export const Frame: React.FC<FrameProps> = ({ background, children }) => {
  return (
    <div className={`w-full h-lvh flex sm:items-center justify-center p-4 max-sm:pt-6 ${background}`}>
      {children}
    </div>
  )
}