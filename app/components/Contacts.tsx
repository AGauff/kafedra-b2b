'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async () => {
    if (!form.name || !form.email) return
    setStatus('sending')

    try {
      // Replace with your Google Apps Script Web App URL
      const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          timestamp: new Date().toISOString(),
          source: 'kafedra-b2b',
        }),
      })

      setStatus('sent')
      setForm({ name: '', company: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="w-full bg-black text-white">
      {/* Form block */}
      <div className="px-8 md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start border-b border-white/10">
        <div>
          <span className="inline-block bg-white text-black text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 mb-4">
            Заявка
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Обсудим программу для вашей команды
          </h2>
          <p className="text-xs text-white/50 leading-relaxed mb-6">
            Заполните форму — мы свяжемся и подберём оптимальный формат под задачу и бюджет. Или напишите напрямую.
          </p>
          <div className="flex gap-3">
            <a href="https://t.me/kafedra" className="border border-white/20 text-white/60 text-xs px-4 py-2 hover:bg-white hover:text-black transition-colors">
              Telegram
            </a>
            <a href="mailto:info@kafedra.school" className="border border-white/20 text-white/60 text-xs px-4 py-2 hover:bg-white hover:text-black transition-colors">
              info@kafedra.school
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Имя *"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border border-white/20 text-white text-xs px-4 py-3 placeholder:text-white/30 focus:border-white/60 focus:outline-none transition-colors"
          />
          <input
            type="text"
            placeholder="Компания"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full bg-transparent border border-white/20 text-white text-xs px-4 py-3 placeholder:text-white/30 focus:border-white/60 focus:outline-none transition-colors"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border border-white/20 text-white text-xs px-4 py-3 placeholder:text-white/30 focus:border-white/60 focus:outline-none transition-colors"
            />
            <input
              type="tel"
              placeholder="Телефон"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-transparent border border-white/20 text-white text-xs px-4 py-3 placeholder:text-white/30 focus:border-white/60 focus:outline-none transition-colors"
            />
          </div>
          <textarea
            placeholder="Расскажите о задаче"
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-transparent border border-white/20 text-white text-xs px-4 py-3 placeholder:text-white/30 focus:border-white/60 focus:outline-none transition-colors resize-none"
          />
          <button
            onClick={handleSubmit}
            disabled={status === 'sending' || !form.name || !form.email}
            className="bg-white text-black text-xs font-bold px-6 py-3 hover:bg-gray-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed self-start"
          >
            {status === 'sending' ? 'Отправка...' : status === 'sent' ? 'Отправлено ✓' : 'Отправить заявку'}
          </button>
          {status === 'error' && (
            <p className="text-xs text-red-400">Ошибка отправки. Попробуйте ещё раз или напишите на info@kafedra.school</p>
          )}
        </div>
      </div>
    </section>
  )
}
