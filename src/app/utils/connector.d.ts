export interface Info {
  name: string;
  config: Record<string, string>;
  tasks?: InfoTasks[] | null;
  type: string;
}
export interface InfoTasks {
  connector: string;
  task: number;
}

export interface ConnectorInfo {
    info: Info;
}

export interface Status {
  name: string;
  connector: Connector;
  tasks?: StatusTasks[] | null;
  type: string;
}
export interface Connector {
  state: string;
  worker_id: string;
}
export interface StatusTasks {
  id: number;
  state: string;
  worker_id: string;
  trace: string;
}

export interface ConnectorStatus {
    status: Status;
}
