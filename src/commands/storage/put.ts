import {Flags, CliUx} from '@oclif/core'
import {promises as fs} from 'node:fs'
import {BaseCommand} from '../../base/base-command'

export default class StoragePut extends BaseCommand<any> {
  static description = 'Receives an Object as Uint8Array, it create and submit a signed put transaction and return an objectId.'

  static examples = [
    '<%= config.bin %> <%= command.id %> --help',
    '<%= config.bin %> <%= command.id %> --file ./example.jpeg',
  ]

  static flags = {
    file: Flags.string(),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(StoragePut)

    const {file} = flags

    if (!file) throw new Error('file arg is required.')
    CliUx.ux.action.start('reading and storing the file')
    const data = await fs.readFile(file)
    const objectData = new Uint8Array(data)

    const objectId: string = await this.subspaceClient.putObject(objectData)
    CliUx.ux.action.stop()
    this.log(`Object Id: ${objectId}`)
    this.exit(0)
  }
}
