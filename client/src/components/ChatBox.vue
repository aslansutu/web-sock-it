<template>
    <h1>WebSocket Chat</h1>
    <h2>Your ID: {{ client_id }}</h2>
    <form action="" onsubmit="sendMessage(event)">
        <input type="text" id="messageText" autocomplete="off"/>
        <button>Send</button>
    </form>
    <ul id='messages'>
    </ul>
</template>


<script>
const host = 'localhost'
const port = '8000' 
const wsurl = (client_id) => 'wss://' + host + ':' + port + '/ws/' + client_id

export default{
    data () {
        return {
            ws: null,
            client_id: Date.now()
        }
    },
    created () {
        console.log("Starting WebSocket connection")
        this.ws = new WebSocket (wsurl(this.client_id))

        this.ws.onmessage = function (event) {
            console.log(event)
        }

        this.ws.onopen = function(event) {
            console.log(event)
            console.log("Successfully connected to WebSocket")
        }
    }
}

</script>