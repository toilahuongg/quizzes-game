export interface BoxProps {
  background: string;
  children: React.ReactNode;
  padding?: number;
  maxWidth?: string;
}
export const Box: React.FC<BoxProps> = ({ background, children, maxWidth, padding }) => {
  return (
    <div className={`w-full rounded-lg ${background} ${padding ? `p-${padding}` : ''}`} style={{ maxWidth }}>
      {children}
    </div>
  )
}