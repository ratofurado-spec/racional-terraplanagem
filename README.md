# Racional Terraplanagem — site institucional

React + TypeScript + Vite. Sem bibliotecas de animação (IntersectionObserver + CSS + rAF).

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # typecheck + build em /dist
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| WhatsApp, telefone, e-mail, endereço, região, redes, domínio | `src/config/site.ts` (WhatsApp também via `VITE_WHATSAPP_NUMBER`, ver `.env.example`) |
| Mensagens pré-preenchidas do WhatsApp | `src/config/site.ts` → `messages` |
| Serviços (provisórios) | `src/data/services.ts` |
| Equipamentos (ilustrativos) | `src/data/equipment.ts` |
| Diferenciais | `src/data/differentials.ts` |
| Galeria | `src/data/gallery.ts` |
| Imagens | `public/images/*` + `src/config/images.ts` |

Campos vazios em `site.ts` não aparecem no site. Enquanto não houver WhatsApp, os botões de orçamento
levam à seção de contato (ou e-mail, se configurado) — nunca a um link inválido.

## Imagens

As fotos são ilustrativas, de bancos de imagens livres (Unsplash License). Troque por fotos reais da
empresa mantendo os nomes em `public/images` ou ajustando `src/config/images.ts`.
Com domínio definitivo: preencha `site.url`, adicione `<link rel="canonical">` e o sitemap.
