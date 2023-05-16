const IconArcade = require('./asset/icon-pro.svg')
const IconAdvanced = require('./asset/icon-advanced.svg')
const IconPro = require('./asset/icon-arcade.svg')

export type PlanEntity = {
  id: number
  icon: any
  name: string
  monthlyPrice: number
  yearlyPrice: number
  yearlyFreeMonths: number
}

export const PlansService = {
  get() {
    const data: PlanEntity[] = [
      {
        id: 1,
        icon: IconArcade,
        name: 'Arcade',
        monthlyPrice: 9,
        yearlyPrice: 120,
        yearlyFreeMonths: 2,
      },
      {
        id: 2,
        icon: IconAdvanced,
        name: 'Advanced',
        monthlyPrice: 9,
        yearlyPrice: 120,
        yearlyFreeMonths: 2,
      },
      {
        id: 3,
        icon: IconPro,
        name: 'Pro',
        monthlyPrice: 9,
        yearlyPrice: 120,
        yearlyFreeMonths: 2,
      },
    ]
    return Promise.resolve({
      data,
    })
  },
}
