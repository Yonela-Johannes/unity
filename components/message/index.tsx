import { Text, View } from 'react-native'
import { Message } from '../../types'
import styles from './styles'

export type ChatRoomMessageProps = {
    message: Message;
}

export const ChatMessage = (props: ChatRoomMessageProps) => {
        const { message } = props;

    const isMyMessage = () => {
        return message.user.id === "u1";
    }    

  return (
        <View style={styles.container}>
            <View style={[styles.messageBox, {
                backgroundColor: isMyMessage() ? '#848286' : '#a1acb6',
                marginLeft: isMyMessage() ? 50 : 0,
                marginRight: isMyMessage() ? 0 : 50,
            }
            ]}>
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                {/* <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>    */}
                <Text style={styles.message}>{message.content}</Text>
            </View>
        </View>
  )
}
