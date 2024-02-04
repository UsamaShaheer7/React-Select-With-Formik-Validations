export const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: `1px solid ${state.selectProps.error ? '#FB1E1E' : '#E7E2E2'}`,
      // borderColor: state.isFocused ? '#E7E2E2' : '#E7E2E2',
      padding: '0px 8px',
      borderRadius: '8px',
      boxShadow: state.isFocused ? '0 0 0 0' : 'none',
      minHeight: '48px',
      overflow: 'hidden',
      color: '#191919', // Change text color to white
      backgroundColor: state.isDisabled ? '#D5D5D5' : '#F9FAFA',
      '&:hover': {
        border: `1px solid ${state.selectProps.error ? '#FB1E1E' : '#E7E2E2'}`,
      },
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: '#737373',
      fontSize: '15px',
      fontWeight: '500',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        padding: '10px',
        backgroundColor: isSelected ? '#F7F9FF' : styles.backgroundColor,
        color: isSelected ? '#737373' : styles.color,
        fontWeight: isSelected && '500',
      };
    },
    singleValue: (styles, { data }) => ({
      ...styles,
      color: '#737373',
      fontSize: '15px',
      fontWeight: '500',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      display: 'none',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#113D4E',
      '&:hover': {
        color: '#113D4E',
      },
    }),
  };