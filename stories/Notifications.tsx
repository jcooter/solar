import React from "react"
import Button from "@material-ui/core/Button"
import { storiesOf } from "@storybook/react"
import NotificationContainer from "../src/components/NotificationContainer"
import NotificationsStore, { addError, addNotification } from "../src/stores/notifications"

const Buttons = (props: { children: React.ReactNode }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      height: React.Children.count(props.children) * 40,
      justifyContent: "space-between"
    }}
  >
    {props.children}
  </div>
)

storiesOf("Notifications", module).add("All", () => (
  <div>
    <NotificationContainer notifications={NotificationsStore} />
    <Buttons>
      <Button variant="contained" onClick={() => addError(new Error("An error happened."))}>
        Show error notification
      </Button>
      <Button variant="contained" onClick={() => addNotification("success", "Action successful!")}>
        Show success notification
      </Button>
    </Buttons>
  </div>
))
