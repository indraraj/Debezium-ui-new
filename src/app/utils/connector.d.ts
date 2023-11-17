interface Info {
  name: string;
  config: Record<string, string>;
  tasks?: InfoTasks[] | null;
  type: string;
}
interface InfoTasks {
  connector: string;
  task: number;
}

interface ConnectorInfo {
  info: Info;
}

interface Status {
  name: string;
  connector: Connector;
  tasks?: StatusTasks[] | null;
  type: string;
}
interface Connector {
  state: string;
  worker_id: string;
}
interface StatusTasks {
  id: number;
  state: string;
  worker_id: string;
  trace: string;
}

interface ConnectorStatus {
  status: Status;
}
