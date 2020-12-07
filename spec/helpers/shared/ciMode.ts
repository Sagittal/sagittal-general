import {program} from "commander"

// TODO: figure out a better solution than tslint disable and hack into commander... what’s happening?
//  Current solution is less than ideal because it won't catch if in one of your tests when you pass an unknown option
//  It should fail and help you (maybe... not sure about that though, you should probably experiment to confirm)
program.allowUnknownOption()

const CI_MODE: boolean = !!process.env.CI || process.argv[2] === "--ci=true"

export {
    CI_MODE,
}
