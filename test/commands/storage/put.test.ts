import {test} from '@oclif/test'
import {assert} from 'chai'

describe('storage:put', () => {
  test
  .stdout()
  .stderr()
  .command(['storage:put', '--file', './example.jpeg'])
  .catch(/EEXIT: 0/)
  .it('runs storage:put --file ./example.jpeg', ctx => {
    assert.include(ctx.stdout, '', 'Object Id: ')
  })
})
