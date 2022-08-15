export interface RequestNodeJsStartOptions {
  name: string
  string: string
  cwd: string
  args?: string
  node_args?: string
  env?: { [key: string]: string }
}
