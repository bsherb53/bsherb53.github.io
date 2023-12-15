const execa = require('execa')
const emoji = require('node-emoji')
const chalk = require('chalk')

const firstLog = `${emoji.get('fast_forward')} ${chalk.yellow('Building...')}`
const secondLog = `${emoji.get('fast_forward')} ${chalk.yellow('Pushing...')}`
const thirdLog = `${emoji.get('rocket')} ${chalk.green('Your app successfully deployed')} ${emoji.get('rocket')}`

;(async () => {
    try {
        const {stdout: currentBranch} = await execa.command('git branch --show-current')
        await execa.execaCommand('git checkout --orphan gh-page')
        console.log(firstLog)
        await execa.execaCommand('npm run build', {stdio: 'inherit'})
        await execa.execaCommand('git --work-tree dist add --all')
        await execa.execaCommand('git --work-tree dist commit -m "gh-page"')
        console.log(secondLog)
        await execa.execaCommand('git push origin HEAD:gh-page --force', {stdio: 'inherit'})
        await execa.execaCommand('rm -r dist')
        await execa.execaCommand(`git checkout -f ${currentBranch}`)
        await execa.execaCommand('git branch -D gh-page')
        console.log(thirdLog)
    } catch (e) {
        console.log(e.message)
        process.exit(1)
    }
})()
