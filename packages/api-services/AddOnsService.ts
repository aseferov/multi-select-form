export type AddOnEntity = {
  id: number;
  name: string;
  desc: string;
  monthlyPrice: number;
  yearlyPrice: number;
};

export const AddOnsService = {
  get() {
    const data: AddOnEntity[] = [
      {
        id: 1,
        name: 'Online Service',
        desc: 'Access to multiplayer games',
        monthlyPrice: 1,
        yearlyPrice: 10,
      },
      {
        id: 2,
        name: 'Larger Storage',
        desc: 'Extra 1TB of cloud save',
        monthlyPrice: 2,
        yearlyPrice: 20,
      },
      {
        id: 3,
        name: 'Customizable Profile',
        desc: 'Custom theme on your profile',
        monthlyPrice: 2,
        yearlyPrice: 20,
      },
    ];
    return Promise.resolve({
      data,
    });
  },
};
