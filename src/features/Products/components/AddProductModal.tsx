import { useAppDispatch } from '@/shared/hooks';
import { Modal, Form, Input, InputNumber, notification  } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { addNewProduct } from '../model/slice';
import type { TAddProduct } from '../model/types';

type Props = {
  open: boolean;
  onClose: () => void;
};

function AddProductModal({ open, onClose }: Props) {
  const [form] = useForm<TAddProduct>();
  const dispatch = useAppDispatch()

  const handleSubmit = async (values: TAddProduct) => {
    const result = await dispatch(addNewProduct(values))
    if(addNewProduct.fulfilled.match(result)) {
      notification.success({
        title: 'Успех',
        description: 'Товар добавлен',
        placement: 'topRight',
      });
      form.resetFields()
      onClose()
    } else {
      notification.error({
        title: 'Ошибка',
        description: 'Не удалось добавить товар',
        placement: 'topRight',
      });
    }
    console.log(result)
  }

  return (
    <Modal
      title="Добавить товар"
      open={open}
      okText="Добавить"
      onCancel={onClose}
      cancelText="Отменить"
      onOk={form.submit}
      destroyOnHidden
    >
      <Form onFinish={handleSubmit} form={form}>
        <Form.Item
          name="title"
          label="Название"
          rules={[{ required: true, message: 'Введите наименование' }]}
        >
          <Input placeholder="NVIDIA RTX 5080 TI" />
        </Form.Item>
        <Form.Item
          name="price"
          label="Цена"
          rules={[{ required: true, message: 'Введите цену' }]}
        >
          <InputNumber
            min={0}
            prefix="₽"
            placeholder="0"
            style={{ width: '100%' }}
          />
        </Form.Item>
        <Form.Item
          name="brand"
          label="Вендор"
          rules={[{ required: true, message: 'Введите вендора' }]}
        >
          <Input placeholder="Например: NVIDIA" />
        </Form.Item>
        <Form.Item
          name="sku"
          label="Артикул"
          rules={[{ required: true, message: 'Введите артикул' }]}
        >
          <Input placeholder="Например: APL-15P-256-BLK" />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddProductModal;
