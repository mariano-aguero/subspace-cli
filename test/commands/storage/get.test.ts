import {expect, test} from '@oclif/test'

describe('storage:get', () => {
  test
  .stdout()
  .command(['storage:get', '--objectId', 'bfdcac2c580955e05913add271639e72ffdb6507b42dfcd16960717727918df8'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('Write file to ./bfdcac2c580955e05913add271639e72ffdb6507b42dfcd16960717727918df8.jpg')
  })
})
