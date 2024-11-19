import localFont from 'next/font/local'

const mabryPro = localFont({
        src: [
            {
                path: './MabryPro-bold.woff2',
                weight: 'bold',
                style: 'normal',
            },
            {
                path: './MabryPro-Medium.woff2',
                weight: '500',
                style: 'normal',
           },
            {
                path: './MabryPro-Black.woff2',
                weight: '900',
                style: 'normal',  
            },
            {
                path: './MabryPro-LightItalic.woff2',
                weight: '300',
                style: 'italic',  
            },
            {
                path: './MabryPro-BoldItalic.woff2',
                weight: 'bold',
                style: 'italic',  
            },
            {
                path: './MabryPro-Light.woff2',
                weight: '300',
                style: 'italic',  
            },
            {
                path: './MabryPro-Light.woff2',
                weight: '300',
                style: 'normal',  
            },
            {
                path: './MabryPro-BlackItalic.woff2',
                weight: '900',
            },
           {
               path: './MabryPro-MediumItalic.woff2',
               weight: '500',
                style: 'italic',  
           },
            {
                path: './MabryPro-Italic.woff2',
                weight: 'normal',
                style: 'italic',  
            },
            {
                path: './MabryPro-Regular.woff2',
               weight: 'normal',
                style: 'normal',  
            },
        ]
    })
    
    

export const mabryProBold = localFont({src: './MabryPro-bold.woff2'})
export const mabryProMedium = localFont({src: './MabryPro-Medium.woff2'})
export const mabryProBlack = localFont({src: './MabryPro-Black.woff2'})
export const mabryProLightItalic = localFont({src: './MabryPro-LightItalic.woff2'})
export const mabryProBoldItalic = localFont({src: './MabryPro-BoldItalic.woff2'})
export const mabryProLight = localFont({src: './MabryPro-Light.woff2'})
export const mabryProBlackItalic = localFont({src: './MabryPro-BlackItalic.woff2'})
export const mabryProMediumItalic = localFont({src: './MabryPro-MediumItalic.woff2'})
export const mabryProItalic = localFont({src: './MabryPro-Italic.woff2'})
export const mabryProRegular = localFont({src: './MabryPro-regular.woff2'})

export default mabryPro