interface IUser {
  id: string
}

interface IUserStore {
  user?: Partial<IUser>
  loading?: boolean
}

export type { IUserStore, IUser }
