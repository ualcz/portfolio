
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-accent/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Contato
          </span>
          <h2 className="text-3xl font-bold mb-4">Vamos Conversar</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interessado em discutir um projeto ou oportunidade? Entre em contato
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <Input placeholder="Seu nome" className="w-full" />
                </div>
                <div>
                  <Input type="email" placeholder="Seu email" className="w-full" />
                </div>
                <div>
                  <Textarea
                    placeholder="Sua mensagem"
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button className="w-full">Enviar Mensagem</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
