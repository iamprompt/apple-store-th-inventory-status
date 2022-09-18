import { FC } from 'react'

const Footer: FC = () => {
  return (
    <div className="mt-10 mb-5 text-center text-sm space-y-3">
      <p>
        ข้อมูลนี้อาจไม่สมบูรณ์หรือผิดพลาด กรุณาตรวจสอบบนหน้าเว็บ{' '}
        <a
          href="https://www.apple.com/th/store"
          target="_blank"
          rel="noreferrer"
          className="text-[#0071E3]"
        >
          Apple Online Store
        </a>{' '}
        อีกครั้ง
      </p>
      <p>
        Made with ❤️ by{' '}
        <a
          href="https://www.facebook.com/wearedprompt"
          target="_blank"
          rel="noreferrer"
          className="text-[#0071E3]"
        >
          iamPrompt
        </a>
      </p>
    </div>
  )
}

export default Footer
