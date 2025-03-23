declare module '@jsonresume/schema'

import { ResumeSchema } from '@kurone-kito/jsonresume-types'
import resumeSchema from '@jsonresume/schema'
import resumeContent from './app/api/content/resume.json'

resumeSchema.validate(
    resumeContent,
    function (err: any, report: any) {
        if (err) {
            console.error('The resume was invalid:', err)
            return
        }
        console.log('Resume validated successfully:', report)
    },
    function (err: any) {
        console.error('The resume was invalid:', err)
    }
)
