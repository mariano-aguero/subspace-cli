import {expect, test} from '@oclif/test'

describe('storage:put', () => {
  test
  .stdout()
  .command(['storage:put', '--file', './example.jpeg'])
  .it('runs storage:put', ctx => {
    expect(ctx.stdout).to.contain('Object Id: ')
  })
})
