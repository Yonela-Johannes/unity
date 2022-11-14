import { Text, View } from 'react-native'
import { Message } from '../../types'
import styles from './styles'
import moment from 'moment'
export type ChatRoomMessageProps = {
    message: Message;
}

export const ChatMessage = (props: ChatRoomMessageProps) => {
        const { message } = props;

    const isMyMessage = () => {
        return message.current_user;
    }    
  return (
        <View style={styles.container}>
            <View style={[styles.messageBox, {
                backgroundColor: isMyMessage() ? '#cac9c9' : '#dfdfdf',
                marginLeft: isMyMessage() ? 100 : 0,
                marginRight: isMyMessage() ? 0 : 100,
            }
            ]}>
                <Text style={styles.name}>{message?.full_name}</Text>
                <Text style={styles.time}>{moment(message?.created).fromNow()}</Text>   
                <Text style={styles.message}>{message?.text}</Text>
            </View>
        </View>
  )
}
