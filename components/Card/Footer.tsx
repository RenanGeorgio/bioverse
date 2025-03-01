import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';


const Footer = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));

export default Footer;