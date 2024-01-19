import { StyleSheet } from "react-native";
import { colors } from "../../Styles/theme";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 35,
    borderRadius: 10,
    alignItems: 'center',
  },

  title: {
    fontSize: 18
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },

  cancelButton: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor:  colors.white,
    marginRight: 20
  },

  removeButton: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: colors.primary,
  },

  buttonRemoveText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.grayLightest
  },

  buttonCancelText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary
  },

});