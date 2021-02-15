import { format } from 'date-fns'

export const formattedDate = (value) => {
  return value ? format(new Date(value), 'MM/dd/yyyy') : ''
}
