import Button from '@/components/Button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/Card';

export default function LoginPage() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-start md:items-center p-8">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Authentication.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <form
              className="w-full"
            >
              <Button className="w-full">Sign in</Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}