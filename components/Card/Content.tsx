import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';


const Content = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));

export default Content;