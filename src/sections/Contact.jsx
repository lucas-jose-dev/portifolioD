import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

import TitleHeader from "../components/TitleHeader"
import ContactExperience from "../components/ContactExperience"
import { useTranslation } from "react-i18next"


const Contact = () => {
  const { t } = useTranslation()

  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true) // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" })
    } catch (error) {
        console.log(form)
      console.error("EmailJS Error:", error) 
      console.log(import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID)
    } finally {
      setLoading(false) 
    }
  }

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={t("contactForm.title")}
          sub={t("contactForm.sub")}
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">{t("contactForm.form.name")}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("contactForm.form.namePlaceholder")}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">{t("contactForm.form.email")}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t("contactForm.form.emailPlaceholder")}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">{t("contactForm.form.message")}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t("contactForm.form.messagePlaceholder")}
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading
                        ? t("contactForm.form.sending")
                        : t("contactForm.form.send")
                      }
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact