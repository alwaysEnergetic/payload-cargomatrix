import Script from 'next/script'

export const InitTheme: React.FC = () => {
  return (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      id="theme-script"
      // strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
                (function () {
                    document.body.classList.forEach(className => {
                    if (className.match(/^theme.*/)) {
                        document.body.classList.remove(className)
                    }
                    })
                    return document.body.classList.add('theme-green')
                })();
                `,
      }}
    />
  )
}
