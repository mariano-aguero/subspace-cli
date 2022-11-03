// eslint-disable-next-line node/no-extraneous-import
import '@polkadot/api-augment'
import {Command, Flags, Interfaces} from '@oclif/core'
import {Identity, SubspaceClient} from '@subspace/subspace'

export type Flags<T extends typeof Command> = Interfaces.InferredFlags<typeof BaseCommand['globalFlags'] & T['flags']>

export abstract class BaseCommand<T extends typeof Command> extends Command {

  // define flags that can be inherited by any command that extends BaseCommand
  static globalFlags = {
    mnemonic: Flags.string(),
    nodeWsProvider: Flags.string(),
    farmerWsProvider: Flags.string(),
  }

  protected flags!: Flags<T>

  protected identity!: Identity
  protected subspaceClient!: SubspaceClient

  public async init(): Promise<void> {
    await super.init()
    const {flags} = await this.parse(this.constructor as Interfaces.Command.Class)
    if (!flags?.mnemonic) flags.mnemonic = '//Alice'
    if (!flags?.nodeWsProvider) flags.nodeWsProvider = 'ws://localhost:9944'
    if (!flags?.farmerWsProvider) flags.farmerWsProvider = 'ws://localhost:9955'

    this.identity = await Identity.fromUri(flags.mnemonic)
    this.subspaceClient = await SubspaceClient.connect(
      this.identity,
      flags.nodeWsProvider,
      flags.farmerWsProvider,
    )

    this.flags = flags
  }

  protected async catch(err: Error & {exitCode?: number}): Promise<any> {
    // add any custom logic to handle errors from the command
    // or simply return the parent class error handling
    return super.catch(err)
  }

  protected async finally(_: Error | undefined): Promise<any> {
    // called after run and catch regardless of whether or not the command errored
    return super.finally(_)
  }
}
