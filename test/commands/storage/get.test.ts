import {test} from '@oclif/test'
import {assert} from 'chai'

describe('storage:get', () => {
  test
  .stdout()
  .stderr()
  .command(['storage:get', '--objectId', 'bfdcac2c580955e05913add271639e72ffdb6507b42dfcd16960717727918df8'])
  .catch(/EEXIT: 0/)
  .it('runs storage:get --objectId bfdcac2c580955e05913add271639e72ffdb6507b42dfcd16960717727918df8', ctx => {
    assert.include(ctx.stdout, '', 'Write file to ./bfdcac2c580955e05913add271639e72ffdb6507b42dfcd16960717727918df8.jpg')
  })
})
