import {Flags} from '@oclif/core'
import {promises as fs} from 'node:fs'
import {fromBuffer} from 'file-type'
import {BaseCommand} from '../../base/base-command'

export default class StorageGet extends BaseCommand<any> {
  static description = 'Receives an objectId calling findObject to return the Object as Uint8Array.'

  static examples = [
    '<%= config.bin %> <%= command.id %> --help',
    '<%= config.bin %> <%= command.id %> --objectId bfdcac2c580955e05913add271639e72ffdb6507b42dfcd16960717727918df8',
  ]

  static flags = {
    objectId: Flags.string(),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(StorageGet)

    const {objectId} = flags
    if (!objectId) throw new Error('objectId flag is required.')

    const object: Uint8Array = await this.subspaceClient.getObject(objectId)

    const fileType = await fromBuffer(object)

    // Write the file as a copy from the original
    const filename = `${objectId}.${fileType?.ext}`
    await fs.writeFile(`./${filename}`, object, {})
    this.log(`Write file to ./${filename}`)
    this.exit(0)
  }
}
