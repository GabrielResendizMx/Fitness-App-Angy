
"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Navbar } from "@/components/aura/Navbar"
import { Footer } from "@/components/aura/Footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, ArrowLeft, Loader2, Lock } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { useFirebase } from "@/firebase"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { toast } from "@/hooks/use-toast"

export default function RegisterPage() {
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  const router = useRouter()
  const { firestore, auth } = useFirebase()
  
  const pkg = searchParams.get("pkg") || "essential"
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  // Redirección a Stripe después del registro exitoso
  useEffect(() => {
    if (registrationSuccess) {
      const timer = setTimeout(() => {
        // En un entorno real, aquí irías a tu checkout de Stripe
        // router.push('https://checkout.stripe.com/...')
        console.log("Redirecting to Stripe checkout...");
        toast({
          title: t('register.redirecting'),
          description: t('register.stripeNotice'),
        })
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [registrationSuccess, router, t])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!firestore || !auth) return

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const confirmPassword = formData.get("confirmPassword") as string

    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Error",
        description: t('register.passwordMismatch'),
      })
      return
    }

    setIsSubmitting(true)
    
    try {
      // 1. Crear usuario en Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      // 2. Estructurar documento para Firestore (siguiendo backend.json)
      const userData = {
        id: user.uid,
        fullName: formData.get("name") as string,
        email: email,
        healthProfile: {
          allergies: formData.get("allergies") as string,
          injuryHistory: formData.get("injuries") as string,
        },
        subscriptionStatus: 'pending_payment',
        packageId: pkg,
        createdAt: serverTimestamp(),
      }

      // 3. Guardar en Firestore usando el UID como ID de documento
      await setDoc(doc(firestore, "users", user.uid), userData)
      
      setRegistrationSuccess(true)
      toast({
        title: t('register.success'),
        description: t('register.successText'),
      })
    } catch (error: any) {
      console.error(error)
      let errorMessage = error.message
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = t('register.emailInUse')
      }
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const pkgDisplayNames: Record<string, string> = {
    essential: t('services.pkgs.essential.title'),
    zen: t('services.pkgs.zen.title'),
    radiant: t('services.pkgs.radiant.title')
  }

  return (
    <main className="min-h-screen bg-secondary/10">
      <Navbar />
      <div className="pt-32 pb-24 px-6 max-w-2xl mx-auto">
        <Link href="/#services" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group w-fit">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          {t('register.back')}
        </Link>
        
        <Card className="border-none shadow-2xl rounded-[2.5rem] bg-white overflow-hidden">
          <CardHeader className="bg-primary text-white p-10 text-center space-y-2">
            <Sparkles className="w-10 h-10 mx-auto mb-2 opacity-80" />
            <CardTitle className="text-3xl font-bold">{t('register.title')}</CardTitle>
            <CardDescription className="text-white/80 text-lg">
              {t('register.subtitle')} <span className="font-bold underline">{pkgDisplayNames[pkg]}</span>
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-10">
            {registrationSuccess ? (
              <div className="text-center py-12 space-y-6 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Loader2 className="w-10 h-10 animate-spin" />
                </div>
                <h3 className="text-3xl font-bold">{t('register.processing')}</h3>
                <p className="text-muted-foreground text-lg">
                  {t('register.redirectingText')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('register.name')}</Label>
                    <Input name="name" id="name" placeholder={t('register.namePlaceholder')} required className="rounded-xl border-secondary/50 focus:ring-primary h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('register.email')}</Label>
                    <Input name="email" id="email" type="email" placeholder={t('register.emailPlaceholder')} required className="rounded-xl border-secondary/50 focus:ring-primary h-12" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="password">{t('register.password')}</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                      <Input name="password" id="password" type="password" required className="rounded-xl border-secondary/50 focus:ring-primary h-12 pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">{t('register.confirmPassword')}</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                      <Input name="confirmPassword" id="confirmPassword" type="password" required className="rounded-xl border-secondary/50 focus:ring-primary h-12 pl-10" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="allergies">{t('register.allergies')}</Label>
                  <Textarea name="allergies" id="allergies" placeholder={t('register.allergiesPlaceholder')} className="rounded-xl border-secondary/50 focus:ring-primary min-h-[100px]" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="injuries">{t('register.injuries')}</Label>
                  <Textarea name="injuries" id="injuries" placeholder={t('register.injuriesPlaceholder')} className="rounded-xl border-secondary/50 focus:ring-primary min-h-[100px]" />
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-primary hover:bg-primary/90 text-white py-8 text-xl font-bold soft-glow transition-all active:scale-95 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-6 h-6 animate-spin mr-2" />
                    ) : null}
                    {t('register.submit')}
                  </Button>
                </div>
                <p className="text-center text-xs text-muted-foreground">
                  {t('register.disclaimer')}
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
      <Footer />
    </main>
  )
}
