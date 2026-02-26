
"use client"

import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="flex items-center gap-1 bg-secondary/50 p-1 rounded-full border border-primary/20">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => toggleLanguage('es')}
        className={cn(
          "rounded-full px-3 h-8 text-xs font-bold transition-all",
          i18n.language.startsWith('es') 
            ? "bg-primary text-white shadow-sm" 
            : "text-muted-foreground hover:text-primary"
        )}
      >
        ES
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => toggleLanguage('en')}
        className={cn(
          "rounded-full px-3 h-8 text-xs font-bold transition-all",
          i18n.language.startsWith('en') 
            ? "bg-primary text-white shadow-sm" 
            : "text-muted-foreground hover:text-primary"
        )}
      >
        EN
      </Button>
    </div>
  )
}
