import { ConfirmationModalProps } from '../../Models/ConfirmationModal';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles';
import React,{ FC } from 'react';

export const ConfirmationModal: FC<ConfirmationModalProps> = ({ isVisible, onCancel, onConfirm })  => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onCancel}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Deseja remover este item?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.buttonCancelText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.removeButton} onPress={onConfirm}>
              <Text style={styles.buttonRemoveText}>Remover</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};