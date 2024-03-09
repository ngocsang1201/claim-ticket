type BackgroundProps = {
  children: React.ReactNode
}

const LOGO_URL =
  'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F023270b734a6415f8b2fc8eb7d42a81b'

export default function Background({ children }: BackgroundProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${LOGO_URL})`,
      }}
      className="fixed inset-0 !h-screen !w-screen bg-cover bg-top !object-none object-center text-white transition-opacity duration-1000"
    >
      {children}
    </div>
  )
}
