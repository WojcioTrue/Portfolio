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
            style: 'italic',  
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

export default mabryPro