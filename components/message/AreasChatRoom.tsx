import { Text, View } from 'react-native'
import { Message } from '../../types'
import styles from './styles'
import moment from 'moment'
import { Loader } from '../customLoader/Loader'
export type ChatRoomMessageProps = {
    message: Message;
}

export const AreasChatRoom = (props: ChatRoomMessageProps) => {
        const { message } = props;
    const isMyMessage = () => {
        return message.current_user;
    }    
  return (
        <View style={styles.container}>
            {!message && <Loader />}
            <View style={[styles.messageBox, {
                backgroundColor: isMyMessage() ? '#cac9c9' : '#dfdfdf',
                marginLeft: isMyMessage() ? 50 : 0,
                marginRight: isMyMessage() ? 0 : 50,
            }
            ]}>
                <Text style={styles.name}>{message?.full_name}</Text>
                <Text style={styles.time}>{moment(message?.created).fromNow()}</Text>   
                <Text style={styles.message}>{message?.text}</Text>
            </View>
        </View>
  )
}