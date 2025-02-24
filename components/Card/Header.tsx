import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';


const Header = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));

export default Header;