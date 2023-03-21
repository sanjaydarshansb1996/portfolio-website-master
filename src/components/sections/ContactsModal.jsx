import { Modal, List } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";

const ContactsModal = ({ visible, setVisible }) => {
  const handleOk = () => {
    console.log("Clicked OK");
    setVisible(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel");
    setVisible(false);
  };

  const data = [
    {
      title: "LinkedIn",
      icon: (
        <UserOutlined
          style={{ fontSize: "29px", color: "#70cb73", paddingTop: "12px" }}
        />
      ),
      link: "https://linkedin.com/in/sanjaydarshansb",
    },
    {
      title: "Email",
      icon: (
        <MailOutlined
          style={{ fontSize: "29px", color: "#d9478a", paddingTop: "16px" }}
        />
      ),
      text: "sanjaydarshansb@outlook.com",
    },
  ];

  return (
    <Modal
      title={
        <p style={{ fontSize: "29px", marginTop: "0px", marginBottom: "0px" }}>
          Sanjay Darshan SB
        </p>
      }
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item style={{ alignItems: "center" }}>
            <List.Item.Meta
              avatar={item.icon}
              title={
                item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#1890ff", fontSize: "16px" }}
                  >
                    {item.title}
                  </a>
                ) : (
                  <span style={{ color: "#1890ff", fontSize: "16px" }}>
                    {item.title}
                  </span>
                )
              }
              description={
                <span style={{ color: "#555", fontSize: "15px" }}>
                  {item.text}
                </span>
              }
            />
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default ContactsModal;
