import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <section className="h-screen">
      <div className="container flex flex-col justify-center items-center h-full">
        <div className="w-4/12">
          <Card className="p-5 w-full">
            <div className="text-center font-extrabold text-2xl mb-5">Login</div>
            <div className="flex flex-col gap-3">
              <label>Username</label>
              <Input placeholder="type username..." />
              <label>Password</label>
              <Input type="password" placeholder="type password..." />
              <Button type="submit" className="bg-cyan-500">
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
