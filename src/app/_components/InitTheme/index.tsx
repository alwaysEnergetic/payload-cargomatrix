import Script from 'next/script'
type InitThemeProps = {
  color: string;
  radius: string | null | undefined;
};
export const InitTheme: React.FC<InitThemeProps> = ({ color, radius }) => {
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
                    document.body.classList.add('theme-${color}');
                    document.body.style.setProperty('--radius', '${radius}rem');
                })();
                `,
      }}
    />
  )
}
