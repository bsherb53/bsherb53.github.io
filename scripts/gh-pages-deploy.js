const execa = require('execa')
const emoji = require('node-emoji')
const chalk = require('chalk')
console.log('something here');

const firstLog = `${emoji.get('fast_forward')} ${chalk.yellow('Building...')}`
const secondLog = `${emoji.get('fast_forward')} ${chalk.yellow('Pushing...')}`
const thirdLog = `${emoji.get('rocket')} ${chalk.green('Your app successfully deployed')} ${emoji.get('rocket')}`

;(async () => {
    try {
        console.log('b1');
        const {stdout: currentBranch} = await execa.command('git branch --show-current')
        console.log('b2');
        await execa.execaCommand('git checkout --orphan gh-page')
        console.log('b3');
        console.log(firstLog)
        await execa.execaCommand('npm run build', {stdio: 'inherit'})
        console.log('b1');
        await execa.execaCommand('git --work-tree dist add --all')
        console.log('b1');
        await execa.execaCommand('git --work-tree dist commit -m "gh-page"')
        console.log('b1');
        console.log(secondLog)
        await execa.execaCommand('git push origin HEAD:gh-page --force', {stdio: 'inherit'})
        console.log('b1');
        await execa.execaCommand('rm -r dist')
        console.log('b1');
        await execa.execaCommand(`git checkout -f ${currentBranch}`)
        console.log('b1');
        await execa.execaCommand('git branch -D gh-page')
        console.log('b1');
        console.log(thirdLog)
    } catch (e) {
        console.log(e.message)
        process.exit(1)
    }
})()
