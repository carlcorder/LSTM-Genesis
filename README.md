# LSTM-Genesis

[![ml5js](https://ml5js.org/img/ml5.png)](https://ml5js.org/) + [![p5js](https://p5js.org/assets/img/p5js.svg)](https://p5js.org/)

A text generating Recurrent Neural Network trained on the first book of the Bible: Genesis.

# Training

The Genesis model was trained using python and Tensorflow. Setup can be found [here](https://github.com/ml5js/ml5-data-and-training/tree/master/training/lstm) and a general outline to LSTM data and training can be found [here](https://github.com/ml5js/ml5-data-and-training/tree/master/training).

This particular model was generated with the following hyperparameters:

```javascript
--rnn_size 128 --num_layers 2 --seq_length 64 --batch_size 32 --num_epochs 1000
```
