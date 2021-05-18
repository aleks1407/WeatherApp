export class Weather {
  constructor(
    public current?: Momentalno[],
    public Location?: Lokacija[],
  ){}
}

export class Momentalno {
  constructor(
    public cloudcover?: number,
    public feelslike?: number,
    public humidity?: number,
    public is_day?: string,
    public temperature?: number,
    public observation_time?: string,
    public uv_index?: number
  ){}
}

export class Lokacija {
  constructor (
    public country?: string,
    public localtime?: string,
    public name?: string,
    public timezone_id?: string
  ){}
}

