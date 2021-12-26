export enum ReporterType {
  /** 儿童手表 */
  Watch = 'Watch',
  /** 交通事故 */
  Traffic = 'Traffic',
  /** 畜牧业 */
  Animal = 'Animal',
  /** 位置行业 */
  Unknown = 'Unknown'
}

export interface Reporter {
  /** 唯一 Id */
  Id: string;
  /** 上报点名字 */
  Name: string;
  /** 上报点描述 */
  Description?: string;
  /** 上报类型 */
  ReporterType: ReporterType
  /** 创建时间 */
  CreatedAt: number;
  /** 更新时间 */
  UpdatedAt?: number;
}

export interface ReporterLocation {
  /** 上报点 */
  ReporterId: string;

  /** 唯一标志 */
  Id: string;
  /** 经度 */
  Lng: string;
  /** 维度 */
  Lat: string;
  /** 上报时间 */
  Timestamp: number;
}
